import Image from 'next/image';

export default function Papers(props) {
  const { papers, form, year } = props;
  return (
    <div className='grid-cols-1'>
      {papers.map((paper) => (
        <>
          {paper.form == form && paper.year == year && (
            <div className='l-wrapper' key={paper.title}>
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
          )}
        </>
      ))}
    </div>
  );
}
