
import { connect } from 'frontity';

const Tribute = ({ state }) => {
        const option = state.theme.options;
	return (
		<div className="tribute">
                        <div className="wrapper">
                                {option.copy != '' && <p>{option.copy}</p>}
                        </div>
                </div>
	);
};

export default connect(Tribute);