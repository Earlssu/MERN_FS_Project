interface MainHeaderLinkProps {
  to: string;
  content: string;
}

const MainHeaderLink: React.FC<MainHeaderLinkProps> = ({ to, content }) => {
  return (
    <li
      className={
        'font-bold text-lg hover:text-amber-400 border-b-2 px-2 pb-6 sm:p-0 border-gray-200 sm:border-none'
      }
    >
      <a href={to}>{content ? content : 'Link Empty'}</a>
    </li>
  );
};

export default MainHeaderLink;
