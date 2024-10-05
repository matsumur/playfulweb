import { useEffect, useState } from 'react';

// Fetch data from Scrapbox API
async function fetchScrapboxData(pageName) {
  const response = await fetch(`/api/fetchScrapbox?page=${pageName}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`エラー: ${errorData.error}`);
  }
  return response.json();
}

// Parse Scrapbox data
function parseScrapboxData(inputData) {
  const result = [];
  let currentId = inputData.length - 1; // Initialize currentId
  let currentEntry = { date: null, preview: null, href: '#' };

  inputData.forEach((entry) => {
    if (!entry.nodes || entry.nodes.length === 0) return; // Skip empty nodes

    if (entry.indent === 0) {
      if (currentEntry.date && currentEntry.preview) {
        result.push({ id: currentId, ...currentEntry });
        currentId--;
      }
      currentEntry = { date: entry.nodes[0].raw, preview: null, href: '#' }; // Reset entry
    } else if (entry.indent === 1) {
      const firstNode = entry.nodes[0];
      if (firstNode.type === 'plain') {
        currentEntry.preview = firstNode.raw;
      } else if (firstNode.type === 'link') {
        currentEntry.href = firstNode.href || firstNode.raw;
      }
    }
  });

  if (currentEntry.date && currentEntry.preview) {
    result.push({ id: currentId, ...currentEntry });
  }

  return result;
}

// Display a single announcement
function News({ announcement }) {
  return (
    <li className='py-5'>
      <div className='relative focus-within:ring-2 focus-within:ring-indigo-500'>
        <h3 className='text-sm font-semibold text-gray-800'>
          <a
            href={announcement.href}
            className='hover:underline focus:outline-none'
          >
            <span className='absolute inset-0' aria-hidden='true' />
            {announcement.date}
          </a>
        </h3>
        <p className='mt-1 text-sm text-gray-600 line-clamp-2'>
          {announcement.preview}
        </p>
      </div>
    </li>
  );
}

// Display a list of news announcements
function NewsList({ announcements, number }) {
  const sortedAnnouncements = announcements
    .sort((a, b) => b.id - a.id) // Sort by descending id
    .slice(0, number); // Get only the latest 'number' announcements

  return (
    <div className='h-full flex flex-col justify-between'>
      <h1 className='pb-5 text-2xl font-bold'>News</h1>
      <div className='flow-root'>
        <ul className='-my-5 divide-y divide-gray-200'>
          {sortedAnnouncements.map((announcement) => (
            <News key={announcement.id} announcement={announcement} />
          ))}
        </ul>
      </div>
    </div>
  );
}

// Wrapper component for handling data fetching and error state
export default function NewsListWrapper({ pageName = 'News', number }) {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchScrapboxData(pageName);
        const parsedData = parseScrapboxData(data);
        setAnnouncements(parsedData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [pageName]); // Re-fetch if pageName changes

  if (error) {
    return (
      <div className='h-full'>
        <h1 className='pb-5 text-2xl font-bold'>News</h1>
        <p className='text-red-500'>Error: {error}</p>
      </div>
    );
  }

  return <NewsList announcements={announcements} number={number} />;
}
