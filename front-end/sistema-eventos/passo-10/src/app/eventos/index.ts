/**
 * Created by Jackson on 14/09/2016.
 */

import {EventosComponent} from "./eventos.component";
import {EventosEditorComponent} from "./eventos-editor.component";
import {EventosListComponent} from "./eventos-list.component";
import {EventosDetalhesComponent} from "./eventos-detalhes.component";
export {EventosModule} from "./eventos.module";
export {EventosService} from './eventos.service';
export {eventos_routes_admin, eventos_routes_public} from './eventos.routing';

export const eventos_admin_declarations : any[] = [EventosListComponent, EventosEditorComponent];
export const eventos_public_declarations : any[] = [EventosComponent, EventosDetalhesComponent];