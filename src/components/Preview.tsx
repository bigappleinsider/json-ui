import { ComponentType } from '../types';
import Button from './Button';
import Image from './Image';
import CustomText from './CustomText';
import TextArea from './TextArea';
import Container from './Container';
import TextField from './TextField';
import Link from './Link';
import Select from './Select';

export default function Preview({ data }: { data: any }) {
  return (
    <div>
      {data.map((view: any, idx: number) => {
        return (
          <div key={idx}>
            {view.type === ComponentType.Button && <Button data={view} />}

            {view.type === ComponentType.Image && <Image data={view} />}

            {view.type === ComponentType.Text && <CustomText data={view} />}

            {view.type === ComponentType.TextArea && <TextArea data={view} />}

            {view.type === ComponentType.TextField && <TextField data={view} />}

            {view.type === ComponentType.Select && <Select data={view} />}

            {view.type === ComponentType.Link && (
              <Link data={view}>
                <Preview data={view.children} />
              </Link>
            )}

            {view.type === ComponentType.Container && (
              <Container data={view}>
                <Preview data={view.children} />
              </Container>
            )}
          </div>
        );
      })}
    </div>
  );
}
