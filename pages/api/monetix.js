export default function handler(req, res) {
  console.log('[=====  Request  =====>')
  console.log(req)
  console.log('<=====  /Request  =====]')
  res.status(200).json({ name: 'Monetix callback' })
}
