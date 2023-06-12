import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';



export default function Task({task}) {
  if(!task)return ;
  return (
    <Card sx={{ cursor:"pointer",  margin:"15px 0 15px 0",width: "275px", padding:"0" }}>
      <div style={{padding:"10px 0 10px 0"}}>
      <Typography  sx={{ fontSize: 18, fontWeight:"300" , paddingLeft:"10px" }} component="div">
          {task.title}
        </Typography>
        <Typography  sx={{ fontSize: 14 , paddingLeft:"10px" }} component="div">
          {task.description}
        </Typography>
        </div>
    </Card>
  );
}
