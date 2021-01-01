export default function friendlyUrl (url) {
  return url.toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'')
    .replace(/\s+/g,'-')
    .replace(/\ı+/g,'i')
    .toLowerCase()
    .replace(/&/g,'-and-')
    .replace(/[^a-z0-9\-]/g,'')
    .replace(/-+/g,'-')
    .replace(/^-*/,'')
    .replace(/-*$/,'');
}