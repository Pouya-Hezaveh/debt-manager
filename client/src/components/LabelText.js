import '../index.css';
import './AppText.css';

const LabelText = ({ theText, fontSize, margin, fontWeight }) => {

    return (
        <p className="persian-text text-shadow" style={{ fontSize: fontSize, margin: margin, fontWeight: fontWeight }}>
            {theText}
        </p>
    )
}

export default LabelText