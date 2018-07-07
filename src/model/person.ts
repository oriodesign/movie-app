import {Movie} from './movie';
import {Tv} from './tv';

export interface Person {
    profile_path: string;
    adult: boolean;
    id: number;
    media_type: string;
    name: string;
    popularity: number;
    known_for: (Movie|Tv)[];
}
