import CustomInput from '../CustomInput';
import { FormControl, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { CKEditor } from 'ckeditor4-react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useUploadFile } from 'mutations/alumni';
import { useGetCategories } from 'queries/category';
import slug from 'vietnamese-slug';
import { useCreatePost } from '../../../mutations/post';

export default function PostForm(callback, deps) {
  const { mutateAsync: uploadFile } = useUploadFile();
  const { data: categories } = useGetCategories();
  const { mutateAsync: createPost } = useCreatePost();
  const [category, setCategory] = useState(categories && categories.data[0].id || 1);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleChangeCategory = useCallback((event) => {
    setCategory(event.target.value);
  }, []);

  const handleSelectedImage = useCallback(file => {
    setFile(file);
  }, []);
  const handleSubmit = useCallback(async () => {
    const slugUrl = slug(title + new Date().getTime());
    const data = await uploadFile({ file });
    const thumbnail = data?.data?.url;
    const result = await createPost({
      thumbnail,
      title,
      content,
      categoryId: category,
      slug: slugUrl,
    })
  }, [file, title, content, category]);

  useEffect(() => {
    if (file)
      setThumbnail(URL.createObjectURL(file));
  },  [file])

  return (
    <>
      <div className={'mb-5'}>
        <h1 className={'font-bold my-2'}>Tiêu đề bài viết</h1>
        <CustomInput onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className={'w-64'}>
        <h1 className={'font-bold my-2'}>Danh mục</h1>
        <FormControl fullWidth variant={'outlined'}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Age"
            onChange={handleChangeCategory}
          >
            {categories && categories.data.map((value, index) => <MenuItem value={value.id} key={index}>{value.name}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
      <div>
        <div className="flex mt-8">
          <div className="max-w-2xl rounded-lg shadow-xs bg-gray-50">
            <div className="m-4">
              <div className="inline-block mb-2 text-gray-500">Hình đại diện của bài viết</div>
              <div className="flex items-center justify-center w-full">
                <label
                  className="relative flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  {thumbnail ?
                    <img src={thumbnail} alt="" className={'w-full h-full absolute top-0 right-0 bottom-0 left-0 cursor-pointer'} /> :
                    <div className="flex flex-col items-center justify-center pt-7 cursor-pointer relative z-20">
                      <svg xmlns="http://www.w3.org/2000/svg"
                           className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                           fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Ấn vào để chọn ảnh</p>
                    </div>}
                  <input type="file" className="opacity-0" accept="image/*" onChange={e => handleSelectedImage(e.target.files[0])}/>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'mt-6'}>
        <h1 className={'font-bold mb-2 mt-4'}>Nội dung bài viết</h1>
        <CKEditor
          config={{
            height: '500px',
          }}
          onChange={({editor}) => setContent(editor.getData())}
        />
      </div>
      <div className={'flex justify-end mt-8'}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          className={'bg-blue-600'}
          onClick={handleSubmit}
        >
          Đăng bài
        </Button>
      </div>
    </>
  )
}