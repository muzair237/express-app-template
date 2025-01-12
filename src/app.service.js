class AppService {
  getHello(_, res) {
    res.send('Hello from Express App Template!');
  }
}

export default new AppService();
