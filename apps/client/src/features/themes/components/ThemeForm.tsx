interface ThemeFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
}

const ThemeForm: React.FC<ThemeFormProps> = ({ onSubmit, children }) => {
  return (
    <form
      className={
        'border border-gray-400 p-4 max-w-3/4 mx-auto mt-4 rounded-md flex flex-col gap-4 sm:max-w-full sm:mx-4'
      }
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default ThemeForm;
