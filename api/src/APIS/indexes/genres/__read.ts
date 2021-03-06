import { RequestSchema, RequestType } from "../../../util/interface/RequestSchema";
import { verify_request_body } from "../../../util/verify_request_body";
import { db } from "./../../../firebase";

const __schema_read:RequestSchema = {
    type: RequestType.GET,
    content: {}
}

const __read = async (req:any, res:any) => {
    if(!verify_request_body(req, res, __schema_read)) {
        return;
    }

    let doc = db.collection("index-genres").doc(req.app_user.id);
    let doc_get =await doc.get();
    if(!doc_get.exists) {
        res.json({
            genres: {}
        });
        return;
    }

    let doc_data = doc_get.data();

    if(req.params.genreid !== undefined) {
        if(!doc_data.genres[req.params.genreid]) {
            res.status(404);
            res.json({message: "genre ID not found"})
            return;
        }

        res.json(doc_data.genres[req.params.genreid]);
        return;
    }

    res.json(doc_data);
}

export default __read;