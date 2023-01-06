import { useState } from "react";
import { useZxing } from "react-zxing";

export const BarcodeScanner = ({setSearchKey}) => {
	const [result, setResult] = useState("");

  
	const { ref } = useZxing({
		onResult: (result) => {
			console.log(result.getText());
			setResult(result.getText());
      setSearchKey(result);
		},
		// onError: (e) => {
		// 	console.log(e);
		// },
   
    timeBetweenDecodingAttempts: 300
	});

	return (
		<>
			<video ref={ref} />
			<p>
				<span>Last result:</span>
				<span>{result}</span>
			</p>
		</>
	);
};
