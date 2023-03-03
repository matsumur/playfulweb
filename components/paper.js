import Image from "next/image";

export default function Papers(props) {
const { papers, form, year } = props
return (
<div className="grid-cols-1">
    {papers.map((paper) => (
    <>{paper.form==form && paper.year==year && (
        <div className="l-wrapper" key={paper.title}>
            <article className="card border rounded-xl bg-gray-50">
                <header class="card-header">
                    <div className="card-image">
                        <img src={ paper.imageURL ? "/project-images/" +paper.imageURL : "/project-images/noImage.png" } height={100} width={150} objectFit="cover" alt="" />
                        <div class="flex-1">
                            <h4 class="card-title margin-remove">【{paper.form}】</h4>
                            <h4 class="card-title ">{paper.title}</h4>
                            <ul class="card-meta card-nav">
                                <p> {paper.publisher} <br />{paper.conforenceName}</p>
                            </ul>
                            <ul class="card-meta card-nav">
                                {paper.document && (
                                <a href={paper.document}>
                                    <p>DOI</p>
                                </a>
                                )}
                            </ul>
                        </div>
                    </div>

                </header>
                <div class="card-body">
                    <p>{paper.abstruct}</p>
                </div>
            </article>
        </div>
        )}
    </>
    ))}
</div>
);
}
