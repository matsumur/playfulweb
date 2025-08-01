import Image from 'next/image';
import Divider from './divider';

export default function Papers(props) {
  const { papers } = props;
  
  // Filter papers that have valid form (not undefined/null/empty)
  const validPapers = papers.filter(paper => paper.form && paper.form.trim() !== '');
  
  // Group papers by form and year, then sort
  const groupedPapers = {};
  
  validPapers.forEach(paper => {
    const key = `${paper.form}-${paper.year}`;
    if (!groupedPapers[key]) {
      groupedPapers[key] = {
        form: paper.form,
        year: paper.year,
        papers: []
      };
    }
    groupedPapers[key].papers.push(paper);
  });
  
  // Sort groups by year (descending), then by form
  const sortedGroups = Object.values(groupedPapers).sort((a, b) => {
    if (b.year !== a.year) {
      return b.year - a.year; // Year descending
    }
    return a.form.localeCompare(b.form); // Form ascending within same year
  });
  
  const renderPaper = (paper, index) => (
    <div className='l-wrapper' key={`${paper.title}-${index}`}>
      {paper.document ? (
        <a
          href={paper.document}
          className='block transition-all duration-200 hover:shadow-md relative group'
        >
          <article className='card border rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transform hover:scale-[1.01] transition-all'>
            <header className='card-header'>
              <div className='flex-1 px-5'>
                <div className='flex items-center'>
                  <h4 className='card-title flex-grow'>
                    {paper.title}
                  </h4>
                </div>
                <ul className='card-meta card-nav'>
                  <p>
                    {' '}
                    {paper.publisher} <br />
                    {paper.conferenceName}
                  </p>
                </ul>
              </div>
            </header>
          </article>
        </a>
      ) : (
        <article className='card border rounded-xl bg-gray-50'>
          <header className='card-header'>
            <div className='flex-1 px-5'>
              <h4 className='card-title'>{paper.title}</h4>
              <ul className='card-meta card-nav'>
                <p>
                  {' '}
                  {paper.publisher} <br />
                  {paper.conferenceName}
                </p>
              </ul>
            </div>
          </header>
        </article>
      )}
    </div>
  );

  return (
    <div className='grid-cols-1'>
      {sortedGroups.map(group => (
        <div key={`${group.form}-${group.year}`}>
          <Divider>{group.form}({group.year}年)</Divider>
          <div className='l-wrapper'>
            {group.papers.map((paper, index) => renderPaper(paper, index))}
          </div>
        </div>
      ))}
    </div>
  );
}
