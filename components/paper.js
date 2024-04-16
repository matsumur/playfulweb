import Image from 'next/image';

export default function Papers(props) {
  const { papers, form, year } = props;
  return (
    <div className='grid-cols-1'>
      {papers.map((paper) => (
        <>
          {paper.form == form && paper.year == year && (
            <div className='l-wrapper' key={paper.title}>
              <article className='card border rounded-xl bg-gray-50'>
                <header className='card-header'>
                  {/* <div className='card-image'>
                    <img
                      className='img-small-size md:img-middle-size'
                      src={
                        paper.imageURL
                          ? '/project-images/' + paper.imageURL
                          : '/project-images/noImage.png'
                      }
                      objectFit='cover'
                    /> */}
                  <div className='flex-1 px-5'>
                    {/* <h4 className='card-title margin-remove'>
                      【{paper.form}】
                    </h4> */}
                    <h4 className='card-title'>{paper.title}</h4>
                    <ul className='card-meta card-nav'>
                      <p>
                        {' '}
                        {paper.publisher} <br />
                        {paper.conferenceName}
                      </p>
                    </ul>
                    <ul className='card-meta card-nav'>
                      {paper.document && (
                        <a href={paper.document}>
                          <p>DOI</p>
                        </a>
                      )}
                    </ul>
                  </div>
                  {/* </div> */}
                </header>
                {/* <div className='card-body hidden lg:inline-block '>
                  <p>{paper.abstract}</p>
                </div> */}
              </article>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
