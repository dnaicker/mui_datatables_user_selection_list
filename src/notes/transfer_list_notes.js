import React from 'react';
//--------
import { makeStyles } from '@material-ui/core/styles';
//--------
import Grid from '@material-ui/core/Grid';
//--------
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//--------
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
//--------
import Checkbox from '@material-ui/core/Checkbox';
//--------
import Button from '@material-ui/core/Button';
//--------
import Divider from '@material-ui/core/Divider';

//--------
const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

//-------- what does this do
function not(a, b) {
  console.log('not', a, b);
  return a.filter(value => b.indexOf(value) === -1);
}

//-------- what does this do
function intersection(a, b) {
  console.log('intersection', a, b);
  return a.filter(value => b.indexOf(value) !== -1);
}

//-------- what does this do
function union(a, b) {
  console.log('union', a, b);
  return [...a, ...not(b, a)];
}

//--------
export default function TransferList() {
  const classes = useStyles();
  //-------- what does this do?
  const [checked, setChecked] = React.useState([]);
  //-------- does this decide which items appear on the left and right
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);
  //-------- does this call the function intersection, and shift values from one array to the other
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  //--------
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  //--------
  const numberOfChecked = items => intersection(checked, items).length;

  //--------
  const handleToggleAll = items => () => {
    //-------- 
    if (numberOfChecked(items) === items.length) {
      //-------- 
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  //--------
  const handleCheckedRight = () => {
    //-------- concat string? what is the value of leftChecked
    setRight(right.concat(leftChecked));
    //-------- 
    setLeft(not(left, leftChecked));
    //-------- 
    setChecked(not(checked, leftChecked));
  };

  //--------
  const handleCheckedLeft = () => {
    //-------- what does this set
    setLeft(left.concat(rightChecked));
    //-------- what does this set
    setRight(not(right, rightChecked));
    //-------- what does this set
    setChecked(not(checked, rightChecked));
  };

  //-------- why is this here
  const customList = (title, items) => (
    //-------- why is there a card
    <Card>
      <CardHeader
        className={classes.cardHeader}
        //-------- persons face?
        avatar={
          //-------- selection checkbox
          <Checkbox
            //-------- event on click handle
            onClick={handleToggleAll(items)}
            //-------- update number of checked items
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            //-------- what is indeterminate?
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            //-------- why disable?
            disabled={items.length === 0}
          />
        }
        title={title}
        //-------- indicate number of checked items
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />

      //-------- places the divider here
      <Divider />

      //--------
      <List className={classes.list} dense component="div" role="list">
        //-------- 
        {items.map(value => {
          const labelId = `transfer-list-all-item-${value}-label`;

          //-------- 
          return (
            //-------- why another event handler for clicking
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                //-------- another checkbox
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              //-------- display user?
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      //--------
      <Grid item>{customList('Choices', left)}</Grid>
      //--------
      <Grid item>
      //--------
        <Grid container direction="column" alignItems="center">
          //-------- 
          <Button
            //-------- add style
            variant="outlined"
            size="small"
            className={classes.button}
            //-------- event handler
            onClick={handleCheckedRight}
            //-------- property  to move
            disabled={leftChecked.length === 0}            
          >
            Add &gt;
          </Button>
          //--------
          <Button
            //-------- style
            variant="outlined"
            size="small"
            className={classes.button}
            //-------- event
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}            
          >
            Remove &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Chosen', right)}</Grid>
    </Grid>
  );
}