import cors from "cors";

const whiteList = [];

const corsInit = (req, res, next) => {
	cors({
		origin: (origin, callback) => {
			if (!origin || whiteList.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
	});
	next();
};

export default corsInit;
