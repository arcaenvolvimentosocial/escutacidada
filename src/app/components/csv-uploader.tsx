import { useEffect, useState } from 'react';
import fichaTecnicaCsv from '../../imports/ficha_tecnica.csv?raw';
import passosAplicacaoCsv from '../../imports/passos_aplicacao.csv?raw';

interface CSVUploaderProps {
  onFichaTecnicaLoad: (file: File) => Promise<void>;
  onPassosLoad: (file: File) => Promise<void>;
  fichaTecnicaLoaded: boolean;
  passosLoaded: boolean;
}

export const CSVUploader = ({
  onFichaTecnicaLoad,
  onPassosLoad,
}: CSVUploaderProps) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadEmbeddedCSVs = async () => {
      if (initialized) return;

      try {
        const fichaFile = new File(
          [fichaTecnicaCsv],
          'ficha_tecnica.csv',
          { type: 'text/csv;charset=utf-8' }
        );

        const passosFile = new File(
          [passosAplicacaoCsv],
          'passos_aplicacao.csv',
          { type: 'text/csv;charset=utf-8' }
        );

        await onFichaTecnicaLoad(fichaFile);
        await onPassosLoad(passosFile);

        setInitialized(true);
      } catch (err) {
        console.error('Erro ao carregar CSVs embutidos:', err);
      }
    };

    void loadEmbeddedCSVs();
  }, [initialized, onFichaTecnicaLoad, onPassosLoad]);

  return null;
};
