class AppService {
  getHello(_, res) {
    res.send('Hello from Express!');
  }
}

export default new AppService();
