import '../index.css';
import './AppText.css';

const LabelText = ({theText, fontSize, margin}) => {
    
    return (
        <p className="persian-text text-shadow" style={{fontSize: fontSize, margin: margin}}>
            {theText}
        </p>
    )
}

export default LabelText