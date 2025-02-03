import {
  ChangeEvent,
  HTMLAttributes,
  memo,
  MouseEvent,
  useCallback,
  useState,
} from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  /**
   * Wraps the function declaration in useCallback to prevent
   * unnecessary re-renders
   *
   * @param {File} image - changes image file
   * @returns {void}
   *
   */
  onImageChange: (image: File) => void;
  /**
   * Text to show when no image is in the value
   */
  placeholder?: string;
  url?: string;
}

export const ImageUpload = memo(
  ({
    id,
    onImageChange,
    placeholder = "Insert image here",
    url = "",
  }: Props) => {
    const [image, setImage] = useState<string>(url);

    const handleImageChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files?.[0];
        if (!image) return;
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result as string);
          if (onImageChange) {
            onImageChange(image);
          }
        };
        reader.readAsDataURL(image);
      },
      [onImageChange],
    );

    const handleRemoveImage = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setImage("");
      },
      [],
    );

    return (
      <label
        htmlFor={id}
        className="relative w-40 h-24 bg-blue-100 rounded-lg flex items-center justify-center"
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-full rounded-lg object-cover"
          />
        ) : (
          <img
            src={`https://placehold.co/600x400?font=roboto&text=${placeholder}`}
            alt="Insert Image"
            className="w-full h-full rounded-lg object-cover"
          />
        )}
        <input
          type="file"
          id={id}
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && (
          <div className="absolute top-2 right-2 flex space-x-2">
            <label
              htmlFor={id}
              className="cursor-pointer p-1 rounded-full shadow-md"
            >
              ✏️
            </label>
            <button
              type="button"
              onClick={handleRemoveImage}
              className="p-1 rounded-full shadow-md"
            >
              ❌
            </button>
          </div>
        )}
      </label>
    );
  },
);
