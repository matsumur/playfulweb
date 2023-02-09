import Image from "next/image";

export default function Papers(props) {
  const { papers, form, year } = props
  return (
    <div className="grid-cols-1">
    {papers.map((paper) => (
      <>{paper.form==form && paper.year==year && ( 
        <div className="l-wrapper">
        <a href={paper.document}>
        <article className="card border rounded-xl bg-gray-50">
          <header class="card-header">
            <div className="card-image">
                <img
                  src={
                    paper.imageURL
                      ? "/project-images/"+paper.imageURL
                      : "/project-images/noImage.png"
                  }
                  height={100}
                  width={150}
                  objectFit="cover"
                  alt=""
        />
        <div class="flex-1">
          <p class="card-nav">{paper.cite}</p>
        </div>
        </article>
        </a>
      </div>
      )}</>
    ))}
    </div>
  );
}
