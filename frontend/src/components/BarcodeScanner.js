import { DecodeHintType, useZxing } from "react-zxing";
import { BarcodeFormat } from "@zxing/library";

export const BarcodeScanner = ({ setSearchKey }) => {
    const hints = new Map();
    hints.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.EAN_13]);
    hints.set(DecodeHintType.TRY_HARDER, true);

    const { ref } = useZxing({
        hints,
        onResult: setSearchKey,
    });

    return <video ref={ref} className="m-auto border-8 w-[350px] md:w-[500px]  border-pink-600"/>;
};
