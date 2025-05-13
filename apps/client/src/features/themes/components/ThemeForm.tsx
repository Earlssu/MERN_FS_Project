interface ThemeFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
}

/**
 * ThemeForm component provides layout and styling for forms.
 * Accepts form fields and buttons as children.
 *
 * @param {object} props
 * @param {React.FormEventHandler<HTMLFormElement>} props.onSubmit -
 *   Function to handle form submission.
 *   If your submit logic is not ready yet, you can temporarily pass `() => {}` as a placeholder.
 *   (Be sure to replace it with a real handler before production.)
 * @param {React.ReactNode} props.children -
 *   Components to be rendered inside the form (e.g., input fields, buttons).
 */
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
