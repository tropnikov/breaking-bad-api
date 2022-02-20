import "./Pagination.scss";

interface Props {
  charsPerPage: number;
  totalChars: number;
  paginate: Function;
}

const Pagination = ({ charsPerPage, totalChars, paginate }: Props) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalChars / charsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination'>
      {pageNumbers.map((number) => (
        <a href='!#' className='page-link' onClick={() => paginate(number)}>
          {number}
        </a>
      ))}
    </nav>
  );
};

export default Pagination;
