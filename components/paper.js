import Image from "next/image";

export function Papers(props) {
    return (
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 mt-6">
            {props.papers.map((paper) => (
                <li  key={paper.title}>
    );
}
