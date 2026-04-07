export const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Flayer PPDB Darul Hijrah Lawang.pdf';
  link.download = '/Flayer PPDB Darul Hijrah Lawang.pdf';
  link.click();
};
