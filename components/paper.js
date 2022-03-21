import Image from "next/image";

export default function Papers(props) {
  const { papers, form } = props;
  return (
    <div className="grid grid-cols-1 px-10 mt-6 border rounded-xl bg-gray-50 card">
      <p class="card-title margin-remove">【{form}】</p>
      {props.papers.map((paper) => (
      <>{paper.form == form && (
      <div className="l-wrapper">
        <div class="flex-1">
          <p class="card-nav">{paper.cite}</p>
        </div>
        <ul class="card-meta card-nav">
          <li> <a href={paper.document} target="_blank" rel="noopener noreferrer">論文</a></li>
        </ul>
      </div>
      )}</>
    ))}
    </div>
  );
}
