import PropType from 'prop-types'

function Header(props) {
	return (
		<header className="w-8/12 h-fit p-8">
			<h1 className="text-5xl text-neutral-50 font-inter text-center font-bold">
				{props.title}
			</h1>
		</header>
	);
}

Header.propTypes = {
    title: PropType.string
}

export default Header;
