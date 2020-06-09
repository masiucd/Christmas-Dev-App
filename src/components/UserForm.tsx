import * as React from 'react';

export interface IUserFormProps {
  onHandleSubmit: (e: React.FormEvent<HTMLFormElement>, text: string) => void;
}
// https://jsonplaceholder.typicode.com/users
export default function UserForm(props: IUserFormProps) {
  const { onHandleSubmit } = props;
  const [text, setText] = React.useState<string>('');
  return (
    <>
      <form
        data-testid='user-form'
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          onHandleSubmit(e, text);
          setText('');
        }}>
        <div className='form-group'>
          <label htmlFor='text'>
            Text
            <input
              type='text'
              name='text'
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
            />
          </label>
        </div>

        <button type='submit'>Submit</button>
      </form>
      {text.length > 0 && <h1>{text}</h1>}
    </>
  );
}
