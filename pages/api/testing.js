export default function testingApi(req, res) {
  if (req.method != "GET") {
    res.status(500).json({ message: "POST" });
  }
  res.status(200).json({ message: "John Doe" });
}
