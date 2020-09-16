import { Logger } from '../Logger/types'
import { FMConfig, FrameworkType } from './types';
import { Framework } from '../Frameworks/types';
import transformer from '../Frameworks/index';

export default class FrameworkManager {
  private baseDir: string;

  constructor(private logger: Logger, private rules:FMConfig){
    this.baseDir = process.cwd();
  }

  use(framework: FrameworkType): Framework {
    const { supportedFrameworks } = this.rules!;
    
    if(supportedFrameworks.includes(framework)){
      this.logger.info(`Using ${framework} to build Icon Components`);
      return new transformer[framework](this.logger, this.rules);
    } else {
      throw new Error(`${framework} is not supported yet.`)
    }
  }
}

/**
 * 
 * const frameworks = {
  vue (files, configFile) {
    logger.info('Creating vue folder');
    if (!fs.existsSync('./components/vue')) {
      fs.mkdirSync('./components/vue', { recursive: true });
    }
    files.forEach((file) => {
      if (configFile.ignoredFiles.indexOf(file) === -1) {
        const fileContent = fs.readFileSync(`${__dirname}/icons/${file}`, {
          encoding: 'utf8'
        });
        if (fileContent) {
          vueTemplate
            .transform({ fileContent, fileName: file.replace(/ +/g, '_').replace(/.svg/g, '') })
            .then((logInfo) => {
              if (logInfo) {
                logger.done(logInfo);
              }
            })
            .catch((error) => {
              logger.error(error);
            });
        }
      }
    });
    vueTemplate.save(files, configFile);
  },
  react (files, configFile) {
    logger.info('Creating react folder');
    if (!fs.existsSync('./components/react')) {
      fs.mkdirSync('./components/react', { recursive: true });
    }
    files.forEach((file) => {
      if (configFile.ignoredFiles.indexOf(file) === -1) {
        const fileContent = fs.readFileSync(`${__dirname}/icons/${file}`, {
          encoding: 'utf8'
        });
        if (fileContent) {
          reactTemplate
            .transform({ fileContent, fileName: file.replace(/ +/g, '_').replace(/.svg/g, '') })
            .then((logInfo) => {
              if (logInfo) {
                logger.done(logInfo);
              }
            })
            .catch((error) => {
              logger.error(error);
            });
        }
      }
    });
    reactTemplate.save(files, configFile);
  }
};

module.exports = frameworks;

 */