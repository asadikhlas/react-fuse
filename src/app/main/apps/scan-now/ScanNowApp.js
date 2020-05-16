import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import './index.css';

const devices = {
   'Browser': {
    title: 'Browser',
    childrens: {
      'Chrome': {
        title: 'Chrome',
      },
      'Firefox': {
        title: 'Firefox',
      },
      'Safari': {
        title: 'Safari',
      }
    }
  },
   'Apple Phones': {
    title: 'Apple Phones',
    childrens: {
      'iPhone 6': {
        title: 'iPhone 6',
      },
      'iPhone 6s': {
        title: 'iPhone 6s',
      },
      'iPhone 6s Plus': {
        title: 'iPhone 6s Plus',
      },
      'iPhone 7': {
        title: 'iPhone 7',
      },
      'iPhone 7 Plus': {
        title: 'iPhone 7 Plus',
      },
      'iPhone 8': {
        title: 'iPhone 8',
      },
      'iPhone 8 Plus': {
        title: 'iPhone 8 Plus',
      },
      'iPhone X': {
        title: 'iPhone X',
      },
    }
  },
   'Apple Tablets': {
    title: 'Apple Tablets',
    childrens: {
      'iPad Mini 4': {
        title: 'iPad Mini 4',
      },
      'iPad Air 2': {
        title: 'iPad Air 2',
      },
      'iPad Pro (12.9-inch)': {
        title: 'iPad Pro (12.9-inch)',
      },
      'iPad Pro (12.7-inch)': {
        title: 'iPad Pro (12.7-inch)',
      },
      'iPad Pro 12.9-inch (2nd gen)': {
        title: 'iPad Pro 12.9-inch (2nd gen)',
      },
    }
  },
   'Android Phones': {
    title: 'Android Phones',
    childrens: {
      'Google Pixel 3 XL': {
        title: 'Google Pixel 3 XL',
      },
      'Galaxy S7': {
        title: 'Galaxy S7',
      },
      'Galaxy S7 Edge': {
        title: 'Galaxy S7 Edge',
      },
      'LG G5': {
        title: 'LG G5',
      },
      'Galaxy Note 5': {
        title: 'Galaxy Note 5',
      },
      'Google Pixel XL': {
        title: 'Google Pixel XL',
      },
      'Google Pixel 2 XL': {
        title: 'Google Pixel 2 XL',
      },
      'Nexus 6P': {
        title: 'Nexus 6P',
      },
      'Galaxy S8': {
        title: 'Galaxy S8',
      },
      'Galaxy S8+': {
        title: 'Galaxy S8+',
      },
      'Galaxy S9': {
        title: 'Galaxy S9',
      },
      'Galaxy S9+': {
        title: 'Galaxy S9+',
      },
      'Galaxy Note 9': {
        title: 'Galaxy Note 9',
      },
    }
  },
   'Android Tablets': {
    title: 'Android Tablets',
    childrens: {
      'Nexus 9': {
        title: 'Nexus 9',
      },
      'Chromebook Pixel': {
        title: 'Chromebook Pixel',
      },
    }
  },
   'Laptop': {
    title: 'Laptop',
    childrens: {
      '14" Notebook': {
        title: '14" Notebook',
      },
      '15.6" Laptop': {
        title: '15.6" Laptop',
      },
      '18.5" monitor': {
        title: '18.5" monitor',
      },
    }
  },
   'Desktop': {
    title: 'Desktop',
    childrens: {
      '21.5" monitor': {
        title: '21.5" monitor',
      },
      '23" monitor': {
        title: '23" monitor',
      },
      '1080p TV': {
        title: '1080p TV',
      },
    }
  }
}
function ScanNowApp(props)
{
  const [selecteds, setSelecteds] = React.useState({});
  const limit = 13;
  const countSelected = () => Object.keys(selecteds).length;
  const addGroupDevice = (group) => {
    let nSelecteds = {
      ...selecteds,
    }
    var checked = true;
    Object.keys(group.childrens).forEach( key => {
      let child = group.childrens[key];
      checked = checked && nSelecteds[child.title];
    });
    Object.keys(group.childrens).forEach( key => {
      let child = group.childrens[key];
      nSelecteds[child.title] = !checked;
    });
    setSelecteds(nSelecteds)
  }
  const addDevice = (group, child) => {
    setSelecteds({
        ...selecteds,
        [child.title] : !selecteds[child.title]
      });
  }
  return (
    <div className="site-scan">
      <form className="flex">
        <h1>Add a Site</h1>
        <input type="text"/>
        <button>Start Scan</button>
      </form>
      <div className="flex flex-row content-center justify-between">
        <div className="flex"></div>
        <div className="flex flex-row items-center justify-end">
          <label className="re-addSite flex flex-row items-center justify-start">
            <Checkbox />
            <span className="ml-8">Re-add the site or file to the queue if it is completed!</span>
          </label>
        </div>
      <div className="project">
        <div className="item">
          <span>4/3</span>
          <font>Projects Available</font>
          <div className="tooltip">
            <i className="material-icons">info</i>
            <span className="tooltiptext">Your plan currently includes 4 projects to save all your Website reports on our server.</span>
          </div>
          <button>BUY MORE PROJECTS</button>
        </div>
        </div>
      </div>
      <div className="scan-filter">
        <header>
          <div className="left">
            <font>SCAN FILTERS</font>
            <span className="selected-filter">{countSelected()} / {limit}</span>
            <span>Selected</span>
          </div>

          <div className="right">
            <button className="apply">APPLY FILTER</button>
            <button className="close">X</button>
          </div>
        </header>
        <section>
          {Object.keys(devices).map( (key, index) => <GroupDevice
          key={index}
          group={devices[key]}
          index={key}
          selecteds={selecteds}
          addGroupDevice={addGroupDevice}
          addDevice={addDevice}
          />)}
        </section>
      </div>
    </div>
  );
}

export default ScanNowApp;

const GroupDevice = ({index, group, selecteds,addGroupDevice, addDevice}) => {
  var checked = true;
  Object.keys(group.childrens).forEach( key => {
    let child = group.childrens[key];
    checked = checked && selecteds[child.title];
  });
  return (<div>
    <label className="title flex flex-row items-center">
      <Checkbox checked={!!checked} onChange={_ => addGroupDevice(group)} />
      <Typography variant="h6">{group.title}</Typography>
    </label>
    <div className="item i-active flex-row flex flex-wrap">
      {Object.keys(group.childrens).map( (device, subIndex) => <label className="flex flex-row items-center" key={subIndex}>
        <Checkbox
        value={group.childrens[device].title}
        checked={!!selecteds[group.childrens[device].title]}
        onChange={_ => addDevice(group, group.childrens[device])}
        />
        <span className="ml-8">{group.childrens[device].title}</span>
      </label>)}
    </div>
  </div>);
};

// const SiteField = (props) => {
//   return (
//     <label className={props.active ? "active":""}>
//       <Checkbox checked={props.active} onChange={evt => props.onChange} /> {props.title}
//     </label> 
//   )
// }