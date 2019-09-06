import { storiesOf, moduleMetadata } from '@storybook/angular';
import { MyControlLibraryModule } from '../../projects/my-control-library/src/lib/my-control-library.module';
import { MyControlLibraryComponent } from '../../projects/my-control-library/src/lib/my-control-library.component';

storiesOf('My Control Library', module)
.addDecorator(
    moduleMetadata({
      imports: [MyControlLibraryModule]
    })
  )
  .add('basic', () => ({
    component: MyControlLibraryComponent,
    // props: {
    //   text: 'hello'
    // }
  }))
//   .add('disabled', () => ({
//     component: ButtonComponent,
//     props: {
//       text: 'disabled',
//       disabled: true
//     }
//   }));