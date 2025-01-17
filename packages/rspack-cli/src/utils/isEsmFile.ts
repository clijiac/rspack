import path from "path";
import readPackageUp from "./readPackageUp";

const isEsmFile = (filePath: string, cwd = process.cwd()) => {
	const ext = path.extname(filePath);
	if (/\.(mjs|mts)$/.test(ext)) {
		return true;
	} else {
		const packageJson = readPackageUp(cwd);
		return packageJson?.type === "module";
	}
};

export default isEsmFile;
