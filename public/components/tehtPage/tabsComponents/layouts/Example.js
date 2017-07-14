const Example = (props) => (
    <div className="example">
        {props.routes.map(route =>
            <route.component key={route.nameId} {...props} />
        )}
    </div>
);

export default Example;