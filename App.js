// const heading = React.createElement("h1", {id: "heading"}, "hello react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
    "div", {id: "parent"}, [
        React.createElement("div", {id: "child"}, [
            React.createElement("h1", {}, "I'm in h1"), React.createElement("h2", {}, "im in h2")
        ]), React.createElement("div", {id: "child2"}, [
            React.createElement("h1", {}, "I'm in h1"), React.createElement("h2", {}, "im in h2")
        ])
    ]);

//JSX

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);