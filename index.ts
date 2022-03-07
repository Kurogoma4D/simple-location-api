import express from 'express';

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

type LocationData = {
  latitude: Number;
  longitude: Number;
  timestamp: Date;
};

app.listen(3000, () => {
  console.log('Start on port 3000.');
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify({ success: true }));
});

app.post(
  '/location',
  (req: express.Request<{}, {}, LocationData>, res: express.Response) => {
    if (req.body.latitude && req.body.longitude) {
      res.send(JSON.stringify({ success: true }));
      return;
    }

    res.status(422).send({ error: 'Some location data must be provided.' });
  }
);

export default app;
