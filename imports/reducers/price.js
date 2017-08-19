/**
 * Created by JohnBae on 7/1/17.
 */

import * as types from '../constants/actionTypes';
import {fromJS} from 'immutable';

const Portfolio = fromJS({
    content: {
        pages: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 25,
                    thresh: 7,
                    multi: true,
                    rep: false,
                },
                opt: {
                    default: true,
                    slider: {
                        min: 1,
                        max: 100,
                        value: 5
                    }
                }
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 300,
                    multi: false,
                    rep: false,
                },
                opt: {
                    small :{}
                }
            },
            layout: "list"
        },
        text: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        translation: {
            opt1: {
                selected: false,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        media: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    features: {
        free: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        premium: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt4: {
                selected: false,
                radio: false,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt5: {
                selected: false,
                radio: false,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt6: {
                selected: false,
                radio: false,
                price: {
                    value:500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    design: {
        style: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        branding: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    services: {
        hosting: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 12,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 10,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        },
        address: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 50,
                    multi: false,
                    rep: "y",
                },
                opt: {}
            },
            layout: "grid"
        },
        maintenance: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 75,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        }
    }
});
const Landing = fromJS({
    content: {
        pages: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 25,
                    thresh: 7,
                    multi: true,
                    rep: false,
                },
                opt: {
                    default: true,
                    slider: {
                        min: 1,
                        max: 100,
                        value: 10
                    }
                }
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 300,
                    multi: false,
                    rep: false,
                },
                opt: {
                    small :{}
                }
            },
            layout: "list"
        },
        text: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        translation: {
            opt1: {
                selected: false,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        media: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    features: {
        free: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        premium: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt4: {
                selected: false,
                radio: false,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt5: {
                selected: false,
                radio: false,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt6: {
                selected: false,
                radio: false,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    design: {
        style: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        branding: {
            opt1: {
                selected: false,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    services: {
        hosting: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 12,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 10,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        },
        address: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 50,
                    multi: false,
                    rep: "y",
                },
                opt: {}
            },
            layout: "grid"
        },
        maintenance: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 75,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        }
    }
});
const Blog = fromJS({
    content: {
        pages: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 25,
                    thresh: 7,
                    multi: true,
                    rep: false,
                },
                opt: {
                    default: true,
                    slider: {
                        min: 1,
                        max: 100,
                        value: 5
                    }
                }
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 300,
                    multi: false,
                    rep: false,
                },
                opt: {
                    small :{}
                }
            },
            layout: "list"
        },
        text: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        translation: {
            opt1: {
                selected: false,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        media: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    features: {
        free: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        premium: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt4: {
                selected: false,
                radio: false,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt5: {
                selected: false,
                radio: false,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt6: {
                selected: false,
                radio: false,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    design: {
        style: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        branding: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    services: {
        hosting: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 12,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 10,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        },
        address: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 50,
                    multi: false,
                    rep: "y",
                },
                opt: {}
            },
            layout: "grid"
        },
        maintenance: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 75,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        }
    }
});
const App = fromJS({
    content: {
        pages: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 25,
                    thresh: 7,
                    multi: true,
                    rep: false,
                },
                opt: {
                    default: true,
                    slider: {
                        min: 1,
                        max: 100,
                        value: 5
                    }
                }
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 300,
                    multi: false,
                    rep: false,
                },
                opt: {
                    small :{}
                }
            },
            layout: "list"
        },
        text: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        translation: {
            opt1: {
                selected: false,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        media: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    features: {
        free: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        premium: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt4: {
                selected: false,
                radio: false,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt5: {
                selected: false,
                radio: false,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt6: {
                selected: true,
                radio: false,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    design: {
        style: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        branding: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    services: {
        hosting: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 12,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 10,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        },
        address: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 50,
                    multi: false,
                    rep: "y",
                },
                opt: {}
            },
            layout: "grid"
        },
        maintenance: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 75,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        }
    }
});
const Store = fromJS({
    content: {
        pages: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 25,
                    thresh: 7,
                    multi: true,
                    rep: false,
                },
                opt: {
                    default: true,
                    slider: {
                        min: 1,
                        max: 100,
                        value: 5
                    }
                }
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 300,
                    multi: false,
                    rep: false,
                },
                opt: {
                    small :{}
                }
            },
            layout: "list"
        },
        text: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        translation: {
            opt1: {
                selected: false,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        media: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    features: {
        free: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        premium: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: true,
                radio: false,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt4: {
                selected: false,
                radio: false,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt5: {
                selected: false,
                radio: false,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt6: {
                selected: true,
                radio: false,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    design: {
        style: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        branding: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    services: {
        hosting: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 12,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 10,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        },
        address: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 50,
                    multi: false,
                    rep: "y",
                },
                opt: {}
            },
            layout: "grid"
        },
        maintenance: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 75,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        }
    }
});

const DEFAULT_STATE = fromJS({
    content: {
        pages: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 25,
                    thresh: 7,
                    multi: true,
                    rep: false,
                },
                opt: {
                    default: true,
                    slider: {
                        min: 1,
                        max: 100,
                        value: 7
                    }
                }
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 300,
                    multi: false,
                    rep: false,
                },
                opt: {
                    small :{}
                }
            },
            layout: "list"
        },
        text: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        translation: {
            opt1: {
                selected: false,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        media: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    features: {
        free: {
            opt1: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: true,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        premium: {
            opt1: {
                selected: false,
                radio: false,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt4: {
                selected: false,
                radio: false,
                price: {
                    value: 200,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt5: {
                selected: false,
                radio: false,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt6: {
                selected: false,
                radio: false,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    design: {
        style: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 100,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 250,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        },
        branding: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 150,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 350,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            layout: "grid"
        }
    },
    services: {
        hosting: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 12,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 10,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        },
        address: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: false,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: false,
                price: {
                    value: 50,
                    multi: false,
                    rep: "y",
                },
                opt: {}
            },
            layout: "grid"
        },
        maintenance: {
            opt1: {
                selected: true,
                radio: true,
                price: {
                    value: 0,
                    multi: false,
                    rep: false,
                },
                opt: {}
            },
            opt2: {
                selected: false,
                radio: true,
                price: {
                    value: 75,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            opt3: {
                selected: false,
                radio: true,
                price: {
                    value: 500,
                    multi: false,
                    rep: "m",
                },
                opt: {}
            },
            layout: "grid"
        }
    }
});


function selection(state = DEFAULT_STATE, action) {

    var newState, array;


    switch (action.type) {

        case types.SET_VALUE_C:
            newState = state.setIn(action.map, action.value);
            return fromJS(newState);

        case types.SET_PACKAGE:
            console.log(action.value);
            if(action.value=="portfolio") newState = Portfolio;
            else if(action.value=="landing") newState = Landing;
            else if(action.value=="blog") newState = Blog;
            else if(action.value=="app") newState = App;
            else if(action.value=="store") newState = Store;
            return fromJS(newState);

        case types.CLEAR_VALUE_C:

            return fromJS(newState);

        default:
            return state;
    }


}

function calculateTotal(state, path, value){
    var name = path[path.length -1];
    path[path.length -1] = "price";
    path.push(name);
    var current = state.get("totalCost");
    var price = state.getIn(path);

    if(price=="?")price = 0;


    if(typeof value == "number"){
        var pages = state.get("content").get("pages");
        if(pages.get("opt3") || pages.get("opt2")){
            current -= (pages.get("opt1") - 5) * pages.get("price").get("opt1");
        }
        else {
            current -= pages.get("opt1") > 5 ? (pages.get("opt1") - 5) * pages.get("price").get("opt1") : 0;
            current +=  value > 5 ? (value  - 5) * pages.get("price").get("opt1") : 0;
        }
    }
    else if(!value){
        if(path[0]=="content" && path[1] == "pages"){
            var pages = state.get("content").get("pages");
            current +=  pages.get("opt1") > 5 ? (pages.get("opt1")  - 5) * pages.get("price").get("opt1") : 0;
        }

        current -= price;
    }
    else{
        current += price;
    }

    return current;
}



export default selection;
