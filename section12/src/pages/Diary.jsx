import {useParams, useSearchParams} from "react-router-dom";

const Diary = () => {
    const params = useParams(); // Path Variables
    console.log(params);

    // const [queryParam, useQueryParam] = useSearchParams(params); // QueryString
    // console.log(queryParam.get("value"));

    return <div>{params.id}번 일기입니다~~</div>
}

export default Diary;