import { string, object, ValidationError } from "yup";
import yup from 'yup'

const schema = object({
    title: string().required().trim(),
    content: string().required().min(5).max(300)
})

interface IPost extends yup.InferType<typeof schema>{}

const PostValidator = async (post: IPost) => {

    return await schema.validate(post)
}


export default PostValidator