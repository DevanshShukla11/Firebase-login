export function userReducer(state=null,action)
{
    switch(action.type)
    {
        case "lOGGED_IN":
            return action.payload;

            case "lOGGED_OUT":
            return action.payload;

            default:
            return state;
    }
}