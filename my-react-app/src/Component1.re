
// type action =
// | Tick;

// type state = {
// count: int,
// };

// [@react.component]
// let make = () => {
// let  (state,dispatch) = React.useReducer((state,action) =>
//   switch (action) {
//   | Tick => {count: state.count + 1}
//   },
//   {count: 0}
// )

// React.useEffect0(() => {
//   let timerId = Js.Global.setInterval(() => dispatch(Tick),1000 );
//   Some(() => Js.Global.clearInterval(timerId))
// })
//   <div>{ReasonReact.string(string_of_int(state.count))}</div>
// }

let handleClick = _event => Js.log("clicked!");

[@react.component]
let make = (~message) => {
  let (users, setUsers) =
    React.useReducer(
      (oldState, actionInTheNewState) => actionInTheNewState,
      None,
    );
  ();


React.useEffect0(() => {
  // this data has a name and it is a string
  let data: {. "name": string} = [%bs.raw "require('./data.json')"];
  let name = data##name;
  setUsers(Some(data));
  //
  None;
});

switch users {
| None => {
  <div onClick={handleClick}>
  {ReasonReact.string(message)}
</div>
}
| Some(users) => {
  <div onClick={handleClick}>
    {ReasonReact.string(users##name)}
  </div>
}
};
    <div>
      {ReasonReact.string(message)}
    </div>
}




