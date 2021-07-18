interface Props {
	// any other props that come into the component, you don't have to explicitly define children.
}

const Container: React.FC<Props> = ({ children }) => {
	return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
