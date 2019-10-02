[@react.component]
type item = {
  title: string,
  completed: bool,
};

type state = {items: list(item)};
let str = React.string;

let make = (~title) => {
  let ({items}, dispatch) =
    React.useReducer(
      (state, action) => state,
      {items: [{title: "Write some things to do", completed: false}]},
    );
  let numItems = List.length(items);
  <div className="App">
    <div className="title"> {React.string(title)} </div>
    <div className="items"> {React.string("")} </div>
    <div className="footer">
      {str(string_of_int(numItems) ++ " items")}
    </div>
  </div>;
};