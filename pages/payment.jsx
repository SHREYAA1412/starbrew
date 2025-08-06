export default function handler(req, res) {
  if (req.method === 'POST') {
    // Your payment logic here
    res.status(200).json({ message: 'Payment success!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
