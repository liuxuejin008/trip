import { AxiosResponse } from 'axios'
export function downloadFile(res: AxiosResponse, fileName?: string) {
  const url = window.URL.createObjectURL(new Blob([res.data]));
  const disposition = res.headers["content-disposition"];

  if (!fileName && disposition) {
    const file = disposition
      .split(";")
      .find((v: string) => v.indexOf("filename=") > -1);

    // 如果接口返回filename，取接口返回的后缀名，但文件名还是拿传入的
    // 因为接口没有返回对应账期 id 的中文名
    // 如果没有传入 filename，则取接口返回的
    if (file) {
      const _fileName = decodeURIComponent(file.split("=")[1] || '');
      const ext = file.substring(file.lastIndexOf(".") + 1);
      const name = fileName ? fileName.split(".")[0] : ''

      fileName = name ? `${name}.${ext}` : _fileName;
    }
  }

  downloadFromUrl(url, fileName)
}

export function downloadFromUrl(url: string, fileName?: string) {
  const link = document.createElement("a")
  link.href = url
  if (fileName) {
    link.setAttribute("download", fileName)
  }
  document.body.appendChild(link)
  link.click()
  link.remove()
}