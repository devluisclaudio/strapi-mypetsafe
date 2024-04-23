import path from "path"
const uploadProvider = strapi.plugin('upload').service('provider');
import mimeTypes from "mime-types"
import slugify from "slugify"

const uploadToLibrary = async (info, response) => {

    const fileNameNoExt = path.basename(info.name, path.extname(info.name)); 

    const entity = {
        name: `${fileNameNoExt}`,
        hash: `${slugify(fileNameNoExt)}`,
        ext: path.extname(info.name),
        mime: mimeTypes.lookup(info.name),
        size: response.headers['content-length'],
        getStream: () => response.data,
    };

    await uploadProvider.upload(entity);
    return strapi
        .query('plugin::upload.file')
        .create({ data: entity });
}

export default uploadToLibrary