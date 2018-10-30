import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceItem } from '../services/service';
import { ServicesService } from '../services/service.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-landing-chimney',
  templateUrl: './landing-chimney.component.html',
  styleUrls: ['./landing-chimney.component.sass'],
  providers: [ServicesService],
  encapsulation: ViewEncapsulation.None
})
export class LandingChimneyComponent implements OnInit {
	private req:any
	title="Chimney Services in "
	serviceList:[ServiceItem]
    private routeSub:any;
	slug:string;
	cards:[{}]
	cities:[string];
	images:{};
    region:ServiceItem;
	constructor(private route: ActivatedRoute,private _service:ServicesService) { }
	regionList={
		"Sacramento":["Antelope", "Arden Arcade", "Brooks", "Cameron Park", "Capay", "Carbondale", "Carmichael", "Citrus Heights", "Clarksburg", "Clay", "Conaway", "Courtland", "Davis", "El Dorado Hills", "El Macero", "Elk Grove", "Elverta", "Esparto", "Fair Oaks", "Florin", "Folsom", "Foothill Farms", "Granite Bay", "Knights Landing", "Lincoln", "Loomis", "Madison", "Monument Hills", "Newcastle", "Penryn", "Plainfield", "Sacramento", "West Sacramento", "Woodland", "Yolo", "Zamora"],
		"Auburn":["Amador City", "Applegate", "Auburn", "Brooks", "Bunker Hill", "Cameron Park", "Coloma", "Cool", "Drytown", "Dunnigan", "Fiddletown", "Guinda", "Ione", "Jackson", "Martell", "Meadow Vista", "New Chicago", "North Auburn", "Pilot Hill", "Placerville", "Plymouth", "Rio Oso", "River Pines", "Rumsey", "Sheridan", "Sunnybrook", "Sutter Creek", "Sutter Hill", "Wheatland"],
		"Antioch and the East Bay Region":["Bay Point", "Bethel Island", "Brentwood", "Byron", "Clayton", "Contra Costa Centre", "Discovery Bay", "Knightsen", "Oakley", "Pittsburg", "Shell Ridge"],
		"Stockton":["Acampo", "Adela", "Airport", "Allen", "Atlanta", "August", "Banta", "Barton", "Bonnefoy", "Buena Vista", "North Shore Lake Camanche", "Camanche Village", "Claribel", "Clarsona", "Claus", "Clay", "Clinton", "Collierville", "Courtland", "Dagon", "Del Rio", "Dogtown", "East Oakdale", "Edwin", "Electra", "Escalon", "Eugene", "Farmington", "Firebrick", "French Camp", "Garden Acres", "Goodmans Corner", "Kennedy", "Kirkwood", "Kit Carson", "Knights Ferry", "Langworth", "Lathrop", "Lincoln Village", "Linden", "Lockeford", "Lodi", "Manteca", "McHenry", "Morada", "Mormon", "Mountain House", "Oakdale", "Peters", "Pine Acres", "Pine Grove", "Pioneer", "Plasse", "Red Corral", "Ripon", "Riverbank", "Salida", "Scottsville", "Stockton", "Taft Mosswood", "Thornton", "Tracy", "Valley Home", "Victor", "Volcano", "Waterloo", "Woodbridge"],
		"South Bay":["Acalanes Ridge", "Alamo", "Ashland", "Blackhawk", "Camino Tassajara", "Castro Valley", "Castle Hill", "Danville", "Diablo", "Dublin", "Fremont", "Hayward", "Livermore", "Moraga", "Newark", "Norris Canyon", "Pleasanton", "San Leandro", "San Lorenzo", "San Ramon", "Sunol", "Walnut Creek"],
		"North Bay":["Alameda", "Alhambra Valley", "Albany", "Beyview-Mountain", "Berkeley", "Canyon", "Clyde", "Concord", "Crockett", "East Richmond Heights", "El Cerrito", "El Sobrante", " Emeryville", "Hasford Heights", "Hercules", "Kensington", "Lafayette", "Martinez", "North Richmond", "Orinda", "Pacheco", "Piedmont", "Pinole", "Pleasant Hill", "Port Costa", "Reliez Valley", "Richmond", "Rodeo", "Rollingwood", "San Pablo", "Tara Hills", "Vine Hill"],
		"Modesto":["Atwater", "Bret Harte", "Bystrom", "Ceres", "Crows Landing", "Diablo Grande", "Denair", "Empire", "Grayson", "Hickman", "Hills Ferry", "Keys", "Hughson", "Livingston", "La Grange", "Los Banos", "Merced", "Modesto", "Monterey Park Tract", "Montpelier", "New Jerusalem", "Newman", "Orestimba High School", "Patterson", "Riverdale Park", "Roberts Ferry Grammer School", "Shackelford", "Turlock", "Vernalis", "Waterford", "Westley", "West Modesto"],
		"Napa":["American Canyon", "Atlas", "Batoo", "Benicia", "Imola", "Napa", "Oak Knoll", "Schellville", "Sonoma", "Union", "Vallejo", "Vineburg", "Yountville"],
		"Vacaville":["Allendale", "Bahia", "Birds Landing", "Bucktown", "Collinsville", "Cordelia", "Dixon", "Elmira", "Fairfield", "Green Valley", "Hartley", "Maine Prairie", "Rio Vista", "Rockville", "Terminous", "Suisun City", "Vacaville", "Scandia Family Center", "Winters"]
	}
	regionNumbers={
		"Sacramento":"(916)823-3388",
		"Auburn":"(530)692-5680",
		"Antioch and the East Bay Region":"(925) 350-0501",
		"Stockton":"(209)815-6085",
		"South Bay":"(925)443-0700",
		"North Bay":"(510)277-5694*",
		"Modesto":"(209)957-9700",
		"Napa":"(707) 812-1935",
		"Vacaville":"(707)542-0626"
	}
	ngOnInit() {
		this.routeSub = this.route.params.subscribe(params => {
            this.slug = params['slug']
            this.req = this._service.list().subscribe(data => {
                data.filter(item => {
                    if(item.slug == this.slug&&item.type=='landing-chimney'){
                        this.region = item as ServiceItem;
						this.cards=this.region['cards']
						//console.log("bb",this.cards)
						if(this.region.hasOwnProperty('images'))
							this.images=this.region['images'];	
						this.title+=this.region.region
						this.cities=this.regionList[this.region.region]
						
                        }
                    }
                )
            })
        })
	}

	ngOnDestroy(){
		this.req.unsubscribe();
	}
}

