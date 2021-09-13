import Bull from 'bull';

//jobs.
import mailContato from '../jobs/mailContato';

//filas.
export const contactEmail = new Bull(mailContato.key, {
  redis: {
    port: 6379,
    host: 'redis_bd',
  },
});

//Especionar erros.
contactEmail.on('failed', (job, err) => {
  console.log('job failed', job.name, job.data);
  console.log(err);
});

//Dispara função.
contactEmail.process(mailContato.handle);
